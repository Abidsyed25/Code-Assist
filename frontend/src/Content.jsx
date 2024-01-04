import { Box, Divider, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import React from "react";

export default function Content() {
    const navigate = useNavigate();
    React.useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    const handleRefactor = () => {
            navigate("/refactor");
    }
    const handleReview = () => {
        navigate("/review");
    }
    return (
        <>
        
              <Box sx={{ display: 'flex',maxWidth:{md:'840px',lg:'1140px'},minHeight:'50vh',flexWrap:'wrap',margin:'auto',paddingY:'10px' }}>
            
                <Box sx={{display:'flex',flexDirection:'column',maxWidth:{md:'600px',lg:'750px'},minHeight:'50vh',justifyContent:'center',alignItems:'start',paddingLeft:{sm:'30px',md:'60px'}}}>
                    <Box sx={{width:'80%'}}>
                    <Typography variant="h5" gutterBottom fontWeight='bold'>
                    Code Refactor
      </Typography>

                    <Typography variant="body1" gutterBottom>

                    Have you spent countless hours hunting down bugs in your code? Code Assist is the perfect solution! It enhances code readability and detects hidden bugs or vulnerabilities.Don't worry! Your project will look the same, but with higher quality code.
                    </Typography>

                    <Button onClick={handleRefactor} variant="contained" sx={{margin:'10px',marginTop:'20px'}}> <Typography variant="button">
        Try Now
      </Typography></Button>
                    </Box>
                    


                </Box>
                <Box sx={{width:{md:'230px',lg:'380px'},margin:'auto'}}>
                    <img src="/part2.svg" alt="img"  width="100%" height="100%"/>
                
                </Box>
                
            </Box>

            <Divider/>


            <Box sx={{ display: 'flex',maxWidth:{md:'840px',lg:'1140px'},minHeight:'50vh',flexWrap:'wrap',margin:'auto',paddingY:'10px' }}>
            <Box sx={{width:{md:'230px',lg:'380px'},margin:'auto'}}>
                    <img src="/part1.svg" alt="img" width="100%" height="100%"/>
                
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',maxWidth:{md:'600px',lg:'750px'},minHeight:'50vh',justifyContent:'center',alignItems:'start',paddingLeft:{sm:'30px',md:'50px'}}}>
                    <Box sx={{width:'80%'}}>
                    <Typography variant="h5" gutterBottom fontWeight='bold'>
                    Code Review
      </Typography>

                    <Typography variant="body1" gutterBottom>

                    Code reviewing for web projects can be time-consuming and less efficient. Our AI tool reviews your code for you, offering explanations and guidance through the process. </Typography>

                    <Button onClick={handleReview} variant="contained" sx={{margin:'10px',marginTop:'20px'}}> <Typography variant="button">
        Try Now
      </Typography></Button>
                    </Box>
                    


                </Box>
                
            </Box>
        
            <Footer/>

        </>
    );
}