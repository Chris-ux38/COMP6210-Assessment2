import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CLASS_CONFIG } from './data.js';
import { useSCP } from './SCPContext.jsx';
import SCPForm from './SCPForm.jsx';

// Helper — works whether value is an array or a pipe-separated string
function parseField(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  return val
    .split(/\n|\|/)
    .map(s => s.trim())
    .filter(Boolean);
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
        fontSize: '1rem',
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

function GlitchText({ text }) {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  );
}

function DetailImage({ src, alt }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div className="doc-img-redacted">
        <span>[VISUAL DOCUMENTATION CLASSIFIED]</span>
      </div>
    );
  }
  return (
    <>
      <img src={src} alt={alt} onError={() => setErrored(true)} />
      <div className="img-scan" />
    </>
  );
}

function SCPDetail() {
  const { id } = useParams();
  const { scps, loading, editSCP, removeSCP } = useSCP();
  const [showEdit, setShowEdit] = useState(false);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loading-dot" /><div className="loading-dot" /><div className="loading-dot" />
        <span>RETRIEVING FILE…</span>
      </div>
    );
  }

  const scp = scps.find((s) => s.id === id);
  if (!scp) return <Navigate to="/404" replace />;

  const cfg = CLASS_CONFIG[scp.objectClass] || CLASS_CONFIG.Safe;

  const procedures = parseField(scp.containmentProcedures);
  const description = parseField(scp.description);
  const tags = parseField(scp.tags);
  const addendum = parseField(scp.addendum);

  const handleEdit = async (payload) => {
    await editSCP(payload.id, payload);
  };
    
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(`Delete ${id}? This cannot be undone.`);

    if (!confirmDelete) return;

    await removeSCP(id);
    setShowEdit(false);
  };

  return (
    <div
      className="detail-view fade-in"
      style={{
        '--accent':        cfg.color,
        '--accent-bg':     cfg.bg,
        '--accent-border': cfg.border,
      }}
    >
      <div className="detail-top-actions">
        <Link to="/" className="back-btn">
          ← RETURN TO CATALOGUE
        </Link>
        <button className="btn-edit-detail" onClick={() => setShowEdit(true)}>
          ✎ EDIT FILE
        </button>
      </div>

      <div className="doc-header">
        <div className="doc-watermark">FOUNDATION</div>
        <div className="doc-top">
          <div>
            <div className="doc-id">
              <GlitchText text={scp.id} />
            </div>
            <div className="doc-nickname">"{scp.nickname}"</div>
          </div>
          <div className="doc-meta">
            <div className="meta-row">
              <span className="meta-label">OBJECT CLASS</span>
              <ClassBadge cls={scp.objectClass} />
            </div>
            <div className="meta-row">
              <span className="meta-label">RATING</span>
              <span className="meta-value">↑ {scp.rating}</span>
            </div>
          </div>
        </div>
        <div className="doc-divider" style={{ background: cfg.color }} />
      </div>

      <div className="doc-img-section">
        <div className="doc-img-frame glass-box">
          <DetailImage src={scp.image} alt={scp.id} />
        </div>
        <p className="img-caption">
          <em>Fig. 1: {scp.imageCaption}</em>
        </p>
      </div>

      <div className="doc-section glass-box">
        <h2 className="section-title">
          <span className="section-icon">⬛</span> SPECIAL CONTAINMENT PROCEDURES
        </h2>
        <ul className="procedure-list">
          {procedures.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      <div className="doc-section glass-box">
        <h2 className="section-title">
          <span className="section-icon">⬛</span> DESCRIPTION
        </h2>
        {description.map((d, i) => (
          <p key={i} className="doc-para">{d}</p>
        ))}
      </div>

      {addendum.length > 0 && (
        <div className="doc-section addendum glass-box">
          <h2 className="section-title">
            <span className="section-icon">⬛</span> ADDENDUM
          </h2>
          {addendum.map((a, i) => (
            <p key={i} className="doc-para">{a}</p>
          ))}
        </div>
      )}

      <div className="doc-section glass-box">
        <h2 className="section-title" style={{ fontSize: '0.75rem' }}>
          CLASSIFICATION TAGS
        </h2>
        <div className="detail-tags">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="doc-footer">
        <span>SCP FOUNDATION — SECURE. CONTAIN. PROTECT.</span>
        <span>DOCUMENT: {scp.id}-FILE-001</span>
      </div>

      {showEdit && (
        <SCPForm
          initial={scp}
          isEdit={true}
          onSubmit={handleEdit}
          onDelete={handleDelete}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  );
}

export default SCPDetail;
