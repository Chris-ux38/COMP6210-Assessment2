
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getAllSCPs, createSCP, updateSCP, deleteSCP } from './supabase.js';

const SCPContext = createContext(null);

export function SCPProvider({ children }) {
  const [scps, setScps]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllSCPs();
      setScps(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const addSCP = async (newSCP) => {
    const updated = await createSCP(newSCP);
    setScps(updated);
  };

  const editSCP = async (id, fields) => {
    const updated = await updateSCP(id, fields);
    setScps(updated);
  };

  const removeSCP = async (id) => {
    const updated = await deleteSCP(id);
    setScps(updated);
  };

  return (
    <SCPContext.Provider value={{ scps, loading, error, addSCP, editSCP, removeSCP, reload: load }}>
      {children}
    </SCPContext.Provider>
  );
}

export function useSCP() {
  const ctx = useContext(SCPContext);
  if (!ctx) throw new Error('useSCP must be used inside <SCPProvider>');
  return ctx;
}
