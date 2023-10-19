import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

export const ToggleSidebar = () => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <IconButton size="large" onClick={handleClick} color="primary">
      <MenuIcon />
    </IconButton>
  );
};
