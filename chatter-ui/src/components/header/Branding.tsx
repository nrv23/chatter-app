
import Typography from '@mui/material/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import { useNavigate } from 'react-router-dom';


const Branding = ()  =>  {
    const navigation = useNavigate()
    return (
       <>   
       <ForumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
       <Typography
         variant="h6"
         noWrap
         component="a"
         onClick={ () => navigation("/")}
         sx={{
           mr: 2,
           display: { xs: 'none', md: 'flex' },
           fontFamily: 'monospace',
           fontWeight: 700,
           letterSpacing: '.3rem',
           color: 'inherit',
           textDecoration: 'none',
           cursor: 'pointer'
         }}
       >
         CHATTER
       </Typography>
       </>
    )
};


export default Branding;