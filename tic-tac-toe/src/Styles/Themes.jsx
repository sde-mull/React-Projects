import {createTheme} from '@mui/material/styles';

const theme = createTheme({
	typography: {
	  h1: {
		fontSize: "3rem",
		"@media (min-width:600px)": {
		  fontSize: "3.5rem",
		},
		"@media (min-width:960px)": {
		  fontSize: "4rem",
		},
	  },
	  h3: {
		fontSize: "1.5rem",
		"@media (min-width:600px)": {
		  fontSize: "2rem",
		},
		"@media (min-width:960px)": {
		  fontSize: "2.5rem",
		},
	  },
	},

	palette: {
		primary: {
		  main: "#1976d2",
		},
		background: {
		  default: "#f5f5f5",
		},
	  },
	  components: {
		MuiBox: {
		  styleOverrides: {
			root: {
			  flexGrow: 1,
			  padding: "16px",
			  display: "flex",
			  justifyContent: "center",
			  alignItems: "center",
			},
		  },
		},
		MuiGrid: {
		  styleOverrides: {
			root: {
			  width: "75vw",
			  height: "75vh",
			  marginTop: "2vh",
			  borderTop: "solid",
			  borderLeft: "solid",
			  "& > div": {
				borderRight: "solid",
				borderBottom: "solid",
				borderColor: "black",
			  },
			},
			item: {
			  display: "flex",
			  justifyContent: "center",
			  alignItems: "center",
			  fontSize: "3rem",
			},
		  },
		},
	  },

  });
  
  export default theme;