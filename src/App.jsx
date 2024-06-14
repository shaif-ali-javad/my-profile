// import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
// import './App.css'

// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import GitHub from '@mui/icons-material/GitHub'
// import Email from '@mui/icons-material/Email'
// import LinkedIn from '@mui/icons-material/LinkedIn'
// import Stack from '@mui/system/Stack';

// import img0 from './assets/behance0.svg'

// function App() {
  
//   return (
//     <Box>
//       <Grid2 container spacing={2} textAlign={'left'} sx={{ p: 10 , pb: -30, mb: -10}} className='a'>
//         <Grid2 xs={6}>
//         <Typography variant='h2' sx={{fontWeight:'bold'}} className='a-4'>
//           Hi,I'm
//         </Typography>
//         <Typography gutterBottom variant='h1' sx={{fontWeight:'bold'}} className='name'>
//           Shaif Ali Javad,
//         </Typography>
//         <Typography variant='body1' className='a-3'>
//           A Passionate <span className='a-4'>{"<Frontend Web Developer/>"}</span> with 1 years experience creating user friendly websites.
//         </Typography>
//         </Grid2>
//         <Grid2 xs={6} sx={{mt:-10}}>
//         <img src={img0} alt="" width={400} className='img0'/>
//         </Grid2>
//       </Grid2>
//       <Box sx={{ p: 10 }} className='a-0-1'>
//         <Typography variant='h3' gutterBottom className='name'>
//           About Me <span className='a-4'>{'{'}</span>
//         </Typography>
//         <Typography variant='body1' sx={{ mt: 1, mb: 2, ml: 5 }}>
//           Im a freelance programmer and web developer with over 1+ years of experience as self-taught. Currently based in Dubai.
//         </Typography>
//         <Typography variant='h3' className='a-4'>
//           {'}'}
//         </Typography>
//       </Box>
//       <Box className="a-0-1" sx={{ p: 10 }}>
//         <Typography variant='h3' gutterBottom className='name'>
//           Get In Touch <span className='a-4'>{'{'}</span>
//         </Typography>
//         <Box sx={{ mb: 2, ml: 5 }} >
//         <Typography variant='h3' gutterBottom className='name'>
//           Have a project in mind?
//         </Typography>
//         <Typography variant='body1' gutterBottom>
//           My inbox is always open for new opportunities feel free to contact me for any inquiries you may have
//         </Typography>
//         <Box sx={{mt: 4}}>
//           <Stack direction={'row'} spacing={2}>
//         <GitHub  sx={{fontSize:70}} className='name0'/>
//             <Typography variant='h4' textAlign={'left'} sx={{pt: 2}} className='a-5' onClick={() => window.open('https://github.com/shaif-ali-javad/')}>
//             github.com/shaif-ali-javad
//             </Typography>
//         </Stack>
//         <Box sx={{m:10}}>
//           <Stack direction={'row'} spacing={2}>
//         <Email sx={{fontSize:60}} className='name0'/>
//         <Typography variant='h4' textAlign={'left'} sx={{pt: 1.5, fontSize: 30}} className='a-5' onClick={() => window.open('mailto:<shaifalijavad40@gmail.com>')}>
//         shaifalijavad40@gmail.com
//         </Typography>
//         </Stack>
//         </Box>
//           <Stack direction={'row'} spacing={2}>
//         <LinkedIn  sx={{fontSize:50}} className='name0'/>
//         <Typography variant='h4' textAlign={'left'} sx={{pt: 1.5, fontSize: 25}} className='a-5' onClick={() => window.open('https://www.linkedin.com/in/shaif-ali-javad/')}> 
//         linkedin.com/in/shaif-ali-javad
//         </Typography>
//         </Stack>
//         </Box>
//       </Box>
//       <Typography variant='h3' className='a-4'>
//         {'}'}
//       </Typography>
//     </Box>
//     <Box className='a-0-1' sx={{ p: 10 }}>
//         <Typography variant='h3' gutterBottom className='name'>
//           My skills
//         </Typography>
//         <Typography variant='body1' gutterBottom>
//           Passionate about computer science from a young age, I've spent over 2 years honing my skills through a diverse array of projects, ranging from Discord bots to complex web applications. My key strength lies in breaking down intricate problems into manageable tasks, a skill crucial for delivering robust, maintainable code on large-scale projects. I thrive on challenges, constantly seeking opportunities to enhance my abilities, and have predominantly pursued self-directed learning, enabling me to swiftly grasp and adapt to new technologies with autonomy.
//         </Typography>
//         <Typography variant='body1' className='a-4' sx={{wordSpacing: 4, letterSpacing: 4}}>
//           <span className='name'>HTML</span> | <span className='name'>CSS</span> | <span className='name'>BOOTSTRAP</span> | <span className='name'>JAVASCRIPT</span> | <span className='name'>REACTJS</span> | <span className='name'>MATERIA-UI</span> | <span className='name'>SQL</span> | <span className='name'>GIT</span>
//         </Typography>
//         </Box>
//         <Box className='a-0-1'>
//           <hr />
//           <Typography variant='h4' className='a-4'>
//             {'<'}Shaif Ali Javad{'/>'}
//           </Typography>
//           <Typography>
            
//           </Typography>
//         </Box>
//        </Box>
//   )
// }

// export default App


import React, { useState } from "react";
import "./camera.css"
import img0 from "../assets/v915-mynt-008-d.jpg";



const Camera = () => {
  const [url, setUrl] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  const capturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const photo = await imageCapture.takePhoto();
      const photoURL = URL.createObjectURL(photo);
      setUrl(photoURL);
      track.stop();  // Stop the video stream after capturing the photo

      // Automatically save the photo
      const link = document.createElement("a");
      link.href = photoURL;
      link.download = "captured-photo.png";
      link.click();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const handleClick = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsPhotoTaken(true);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "crosshair",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();  // Prevent the button click from triggering the handleClick event
          capturePhoto();
        }}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        photo
      </button>

      {isPhotoTaken && url && (
        <img
          src={url}
          alt="captured"
          style={{
            position: "absolute",
            left: clickPosition.x - 125,  // Adjust to center the image
            top: clickPosition.y - 125,  // Adjust to center the image
            width: 250,
            height: 250,
            objectFit: "contain",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <div className="gb">
        <img src={img0} alt="" className="gb-img" />
      </div>
    </div>
  );
};

export default Camera;
