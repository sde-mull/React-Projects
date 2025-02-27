import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import PaintBoard from './PaintBoard';

function BoardGame () {
	return (
		<Box sx={{  flexGrow: 1, p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
			<Grid container sx={{width: '75vw', height: '75vh', mt: '2vh', borderTop: 'solid', borderLeft: 'solid' , '& > div': {
				borderRight: 'solid',
				borderBottom: 'solid',
            	borderColor: 'black',
          },}}>
				{[...Array(9)].map((_, index) => (
          		<Grid
            		key={index}
            		minHeight= '33%'
					minWidth= '33.33%'
					xs={4}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					fontSize={'3rem'}
          		>
					<PaintBoard/>
				</Grid>
        		))}
			</Grid>
		</Box>
	);
}

export default BoardGame;