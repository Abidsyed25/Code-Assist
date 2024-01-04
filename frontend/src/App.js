
import { Route, Routes } from 'react-router-dom';
import Content from './Content';
import Nav from './Nav';
import { Box } from '@mui/material';
import { CodeRefactor } from "./CodeRefactor";
import { CodeReview } from "./CodeReview";
function App() {
  return (
    <>
    <Box sx={{ maxWidth: 'xl', marginX: {lg:2,xl:'auto'} }}>

      <Nav/>
      <Routes>
         <Route path='/refactor' element={<CodeRefactor/>}/>
         <Route path='/review' element={<CodeReview/>}/>
         <Route path='*' element={<Content/>}/>
    
      </Routes>
    
    </Box>
    </>
  );
}

export default App;
