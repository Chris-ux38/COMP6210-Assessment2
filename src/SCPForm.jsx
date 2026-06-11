
import { useState, useEffect } from 'react';

const EMPTY_FORM = {
  id: '',
  objectClass: 'Safe',
  nickname: '',
  image: '',
  imageCaption: '',
  containmentProcedures: '',
  description: '',
  tags: '',
  rating: '+0',
  addendum: '',
};

function arrToText(val) {
  if (!val) return '';
  if (Array.isArray(val)) return val.join('\n');
  return val;
}

function textToArr(val) {
  return val
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function SCPForm({ initial, onSubmit, onClose, isEdit, onDelete }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    if (initial) {
      setForm({
        id:                    initial.id || '',
        objectClass:           initial.objectClass || 'Safe',
        nickname:              initial.nickname || '',
        image:                 initial.image || '',
        imageCaption:          initial.imageCaption || '',
        containmentProcedures: arrToText(initial.containmentProcedures),
        description:           arrToText(initial.description),
        tags:                  Array.isArray(initial.tags) ? initial.tags.join(', ') : (initial.tags || ''),
        rating:                initial.rating || '+0',
        addendum:              arrToText(initial.addendum),
      });
    }
  }, [initial]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');

    if (!form.id.trim()) return setErr('SCP ID is required (e.g. SCP-999)');
    if (!form.nickname.trim()) return setErr('Nickname is required');
    if (!form.containmentProcedures.trim()) return setErr('Containment Procedures are required');
    if (!form.description.trim()) return setErr('Description is required');

    const payload = {
      id:                    form.id.trim(),
      objectClass:           form.objectClass,
      nickname:              form.nickname.trim(),
      image:                 form.image.trim() || null,
      imageCaption:          form.imageCaption.trim(),
      containmentProcedures: form.containmentProcedures.trim(),
      description:           form.description.trim(),
      tags:                  form.tags.trim(),
      rating:                form.rating.trim(),
      addendum:              form.addendum.trim() || null,
    };

    setSaving(true);
    try {
      await onSubmit(payload);
      onClose();
    } catch (ex) {
      setErr(ex.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isEdit ? `EDIT — ${initial?.id}` : 'NEW SCP ENTRY'}
          </h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form className="scp-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>SCP ID *</span>
              <input
                value={form.id}
                onChange={set('id')}
                placeholder="SCP-999"
                disabled={isEdit}
              />
            </label>
            <label>
              <span>Object Class *</span>
              <select value={form.objectClass} onChange={set('objectClass')}>
                <option>Safe</option>
                <option>Euclid</option>
                <option>Keter</option>
              </select>
            </label>
          </div>

          <label>
            <span>Nickname / Designation *</span>
            <input value={form.nickname} onChange={set('nickname')} placeholder='e.g. "The Sculpture"' />
          </label>

          <label>
            <span>Image URL (optional)</span>
            <input value={form.image} onChange={set('image')} placeholder="https://..." />
          </label>

          <label>
            <span>Image Caption</span>
            <input value={form.imageCaption} onChange={set('imageCaption')} placeholder="Brief caption for the image" />
          </label>

          <label>
            <span>Containment Procedures * <small>(one per line)</small></span>
            <textarea
              value={form.containmentProcedures}
              onChange={set('containmentProcedures')}
              rows={4}
              placeholder="SCP-XXX is to be kept in...&#10;No fewer than two (2) armed guards..."
            />
          </label>

          <label>
            <span>Description * <small>(one paragraph per line)</small></span>
            <textarea
              value={form.description}
              onChange={set('description')}
              rows={4}
              placeholder="SCP-XXX is a..."
            />
          </label>

          <div className="form-row">
            <label>
              <span>Tags <small>(comma-separated)</small></span>
              <input value={form.tags} onChange={set('tags')} placeholder="euclid, hostile, biological" />
            </label>
            <label>
              <span>Rating</span>
              <input value={form.rating} onChange={set('rating')} placeholder="+1234" />
            </label>
          </div>

          <label>
            <span>Addendum (optional)</span>
            <textarea
              value={form.addendum}
              onChange={set('addendum')}
              rows={3}
              placeholder="Addendum XXX-1: ..."
            />
          </label>

          {err && <div className="form-error">⚠ {err}</div>}

          <div className="form-actions">
              {isEdit && (
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => onDelete(form.id)}
                  disabled={saving}
                >
                  DELETE FILE
                </button>
              )}
            <button type="button" className="btn-cancel" onClick={onClose}>
              CANCEL
            </button>
            <button type="submit" className="btn-submit" disabled={saving}>
              {saving ? 'SAVING…' : isEdit ? 'SAVE CHANGES' : 'CREATE ENTRY'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
