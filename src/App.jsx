
import SideNavBar from './components/SideNavBar/SideNavBar'
import Header from './components/Header/Header'
import SubHeader from './components/SubHeader/SubHeader'
import { Box, CssBaseline } from '@mui/material'
import MainTable from './components/mainTable/MainTable'

function App() {
  
  return (
  <Box
  fontFamily='Poppins'
  sx={{
    background:'#F9FAFC'
  }}>
  <CssBaseline  >
  <Box   sx={{ display: 'flex', flexDirection: 'row',
        gap:'20px' }}>
      {/* <Box  > */}
        <SideNavBar />
      {/* </Box> */}
      <Box   sx={{ flexGrow: 1 }} >
        <Header />
        <SubHeader />
        <MainTable/>
      </Box>
    </Box>
    </CssBaseline>
  </Box>
  )
}

export default App
