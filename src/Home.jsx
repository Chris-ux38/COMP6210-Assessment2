import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CLASS_CONFIG } from './data.js';
import { useSCP } from './SCPContext.jsx';
import SCPForm from './SCPForm.jsx';

// Helper — works whether tags is an array or a pipe-separated string
function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  return tags.split(' | ').map(t => t.trim()).filter(Boolean);
}

function ClassBadge({ cls }) {
  const cfg = CLASS_CONFIG[cls] || CLASS_CONFIG.Safe;
  return (
    <span
      style={{
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        padding: '2px 10px',
        borderRadius: '2px',
        fontSize: '0.7rem',
        fontFamily: "'Share Tech Mono', monospace",
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontWeight: 700,
      }}
    >
      ▸ {cls}
    </span>
  );
}

function CardImage({ src, alt }) {
  if (!src) {
    return (
      <div className="card-img-redacted">
        <span>[IMAGE REDACTED]</span>
      </div>
    );
  }
  return (
    <>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="card-img-redacted" style={{ display: 'none', position: 'absolute', inset: 0 }}>
        <span>[IMAGE REDACTED]</span>
      </div>
      <div className="card-img-overlay" />
    </>
  );
}

function SCPCard({ scp, index, onDelete, onEdit }) {
  const cfg = CLASS_CONFIG[scp.objectClass] || CLASS_CONFIG.Safe;
  const [confirmDelete, setConfirmDelete] = useState(false);
  const tags = parseTags(scp.tags);

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirmDelete) {
      onDelete(scp.id);
    } else {
      setConfirmDelete(true);
      setTimeout(() => setConfirmDelete(false), 3000);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit(scp);
  };

  return (
    <div className="scp-card-wrapper" style={{ animationDelay: `${index * 0.05}s` }}>
      <Link
        to={`/scp/${scp.id}`}
        className="scp-card glass-box"
        style={{
          '--accent':        cfg.color,
          '--accent-bg':     cfg.bg,
          '--accent-border': cfg.border,
        }}
      >
        <div className="card-scan-line" />

        <div className="card-header">
          <div>
            <div className="card-id">{scp.id}</div>
            <div className="card-nickname">"{scp.nickname}"</div>
          </div>
          <ClassBadge cls={scp.objectClass} />
        </div>

        <div className="card-img-wrap">
          <CardImage src={scp.image} alt={scp.id} />
        </div>

        <div className="card-tags">
          {tags.slice(0, 4).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="card-footer">
          <span className="card-rating">↑ {scp.rating}</span>
          <span className="card-view">VIEW FILE →</span>
        </div>
      </Link>

      <div className="card-admin-bar">
        <button className="admin-btn edit-btn" onClick={handleEdit} title="Edit entry">
          ✎ EDIT
        </button>
        <button
          className={`admin-btn delete-btn ${confirmDelete ? 'confirm' : ''}`}
          onClick={handleDelete}
          title="Delete entry"
        >
          {confirmDelete ? '⚠ CONFIRM?' : '✕ DELETE'}
        </button>
      </div>
    </div>
  );
}

function Home({ filter, search }) {
  const { scps, loading, error, addSCP, editSCP, removeSCP } = useSCP();
  const [showForm, setShowForm]     = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [opError, setOpError]       = useState('');

  const filtered = scps.filter((s) => {
    const matchClass  = filter === 'All' || s.objectClass === filter;
    const q           = search.toLowerCase();
    const tags        = parseTags(s.tags);
    const matchSearch =
      !q ||
      s.id.toLowerCase().includes(q) ||
      s.nickname.toLowerCase().includes(q) ||
      tags.some((t) => t.toLowerCase().includes(q));
    return matchClass && matchSearch;
  });

  const handleCreate = async (payload) => {
    setOpError('');
    try { await addSCP(payload); } catch (e) { setOpError(e.message); throw e; }
  };

  const handleEdit = async (payload) => {
    setOpError('');
    try { await editSCP(payload.id, payload); } catch (e) { setOpError(e.message); throw e; }
  };

  const handleDelete = async (id) => {
    setOpError('');
    try { await removeSCP(id); } catch (e) { setOpError(e.message); }
  };

  return (
    <div className="catalogue-page">
      <div className="catalogue-hero glass-box">
        <h1>SUBJECT CATALOGUE</h1>
        <p>FOUNDATION DATABASE — EYES ONLY — UNAUTHORISED ACCESS IS PUNISHABLE UNDER DOCUMENT O5-001</p>
        <div className="hero-meta">
          <span className="hero-count">{scps.length} SUBJECTS ON FILE</span>
          <button className="btn-new-scp" onClick={() => { setEditTarget(null); setShowForm(true); }}>
            + NEW ENTRY
          </button>
        </div>
      </div>

      {loading && (
        <div className="loading-state">
          <div className="loading-dot" /><div className="loading-dot" /><div className="loading-dot" />
          <span>ACCESSING FOUNDATION DATABASE…</span>
        </div>
      )}

      {error && (
        <div className="api-error-banner">⚠ DATABASE ERROR: {error}</div>
      )}

      {opError && (
        <div className="api-error-banner">⚠ OPERATION FAILED: {opError}</div>
      )}

      {!loading && (
        <div className="scp-grid">
          {filtered.length === 0 ? (
            <div className="empty-state">
              [ NO SUBJECTS MATCH QUERY — CLASSIFICATION SEARCH RETURNED NULL ]
            </div>
          ) : (
            filtered.map((s, i) => (
              <SCPCard
                key={s.id}
                scp={s}
                index={i}
                onDelete={handleDelete}
                onEdit={(scp) => { setEditTarget(scp); setShowForm(true); }}
              />
            ))
          )}
        </div>
      )}

      {showForm && (
        <SCPForm
          initial={editTarget}
          isEdit={!!editTarget}
          onSubmit={editTarget ? handleEdit : handleCreate}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default Home;
