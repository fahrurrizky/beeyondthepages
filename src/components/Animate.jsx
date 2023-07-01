// import { Box, useStyle } from '@chakra-ui/react';

// const GradientBackground = () => {
//   const gradientBackgroundStyle = useStyle({
//     background:
//       'linear-gradient(45deg, #02e1ba 0%,#26c9f2 29%,#d911f2 66%,#ffa079 100%)',
//     backgroundSize: '400% 400%',
//     animation: 'Gradient 15s ease infinite',
//     minHeight: 'calc(100vh - 2rem)',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'stretch',
//     justifyContent: 'space-evenly',
//     overflow: 'hidden',
//     position: 'relative',
//   });

//   const shapeStyle = useStyle({
//     content: '""',
//     width: '70vmax',
//     height: '70vmax',
//     position: 'absolute',
//     background: 'rgba(255, 255, 255, 0.07)',
//     left: '-20vmin',
//     top: '-20vmin',
//     animation: 'morph 15s linear infinite alternate, spin 20s linear infinite',
//     zIndex: 1,
//     willChange: 'border-radius, transform',
//     transformOrigin: '55% 55%',
//     pointerEvents: 'none',
//   });

//   const shapeAfterStyle = useStyle({
//     width: '70vmin',
//     height: '70vmin',
//     left: 'auto',
//     right: '-10vmin',
//     top: 'auto',
//     bottom: 0,
//     animation: 'morph 10s linear infinite alternate, spin 26s linear infinite reverse',
//     transformOrigin: '20% 20%',
//   });

//   return (
//     <Box sx={gradientBackgroundStyle}>
//       <Box sx={shapeStyle} />
//       <Box sx={{ ...shapeStyle, ...shapeAfterStyle }} />
//     </Box>
//   );
// };

// export default GradientBackground;
