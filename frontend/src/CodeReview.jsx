import { Button, Box, Typography, Paper, IconButton } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Footer from "./Footer";
import React from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


export function CodeReview() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const handleCopyClick1 = async () => {
    try {
      await navigator.clipboard.writeText(value2);
      
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };
  const handleCopyClick2 = async () => {
    try {
      await navigator.clipboard.writeText(value);
      
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
  };
  React.useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const handleReview = async () => {
    try{
    const response = await fetch('http://localhost:8000/review', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        content:value2,
      })
    })

    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
      const chunk = await reader.read();
      const { done, value } = chunk;
      if (done) {
        break;
      }
      console.log(value);
      setValue((prev) => prev + value);
    }
  }catch(e){
    alert('setup backend properly in local machine');
  }
  }


  return (
    <>
      <Box sx={{ minHeight: '180vh' }}>
        <Box sx={{ maxWidth: '900px', margin: 'auto', paddingX: '40px', paddingY: '20px' }}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight='bold' sx={{ width: '190px', marginX: 'auto', marginY: '10px' }}>Code Review </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>

              <Typography gutterBottom fontWeight='bold'>Insert your code </Typography>
              <IconButton>

                <ContentCopyIcon fontSize="small" onClick={handleCopyClick1} />
              </IconButton>

            </Box>
          </Box>
          <Paper elevation={9} sx={{ backgroundColor: 'black' }}>

            <CodeEditor value={value2} setValue={setValue2} />
          </Paper>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <Button onClick={handleReview} variant="contained" sx={{ margin: 'auto' }}>Review</Button>
        </Box>
        <Box sx={{ maxWidth: '900px', margin: 'auto', paddingX: '40px', paddingY: '20px' }}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '5px' }}>

            <Typography gutterBottom fontWeight='bold'>Checkout your code review </Typography>
            <IconButton>

              <ContentCopyIcon fontSize="small" onClick={handleCopyClick2} />
            </IconButton>

          </Box>
          <Paper elevation={9} sx={{ backgroundColor: 'black' }}>

            <CodeEditor bool={false} value={value} setValue={setValue} />
          </Paper>
        </Box>
      </Box>
      <Footer />
    </>
  )
}