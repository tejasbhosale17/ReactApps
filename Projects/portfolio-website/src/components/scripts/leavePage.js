import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useLeavePage = () => {
  const navigate = useNavigate();

  const handleLeavePage = useCallback((event, linkLocation) => {
    event.preventDefault();

    document.getElementById('header-comp').style.transition = 'all 0.5s ease-out';
    document.getElementById('header-comp').style.opacity = '0';
    document.getElementById('header-comp').style.top = '-92px';
    
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '1';
    document.body.style.top='10px';
    setTimeout(() => {
      navigate(linkLocation);
    }, 500);
  }, [navigate]);

  return handleLeavePage;
};

export default useLeavePage;
