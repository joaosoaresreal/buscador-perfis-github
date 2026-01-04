import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../assets/git.webp"

type BaseLayoutProps = {
  children: React.ReactNode;
  appBarTitle: string;
};

export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar>
        <Toolbar>
          <Box display="flex" gap={1} alignItems="center" mx={isMobile ? 0 : 10}>
            <Box
              component="img"
              src={logo}
              height={isMobile ? "28px" : "40px"}
              width={isMobile ? "28px" : "40px"}
            />
            <Typography variant={isMobile ? "h6" : "h5"} fontWeight="800">{appBarTitle}</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        display='flex'
        flexDirection='column'
        width="100%"
        alignItems='center'
        sx={{
          bgcolor: "palette.background.default",
          width: "100%",
        }}
        minHeight={100}
        minWidth="100vw"
        mt={10}
      >
        {children}
      </Box>
    </>
  );
}