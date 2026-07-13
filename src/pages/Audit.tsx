import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Audit() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/contact', { replace: true });
  }, [navigate]);

  return null;
}
