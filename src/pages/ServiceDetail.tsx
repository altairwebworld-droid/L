import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceDetail() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/what-we-build', { replace: true });
  }, [navigate]);

  return null;
}
