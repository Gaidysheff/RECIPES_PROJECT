import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

import burger from "../../static/burger1.jpg";

const PostCard = ({ myDirection }) => {
  return (
    <Box mt={3}>
      <Link href="#" sx={{ textDecoration: "none" }}>
        <Card>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: `${myDirection}`,
                md: `${myDirection}`,
              },
              flexDirection: "row",
            }}
          >
            <CardMedia
              component={"img"}
              height="300px"
              image={burger}
              alt="burger_image"
              sx={{
                width: "400px",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.6,
                  boxSizing: "border-box",
                  zIndex: 1,
                  transition: `all 0.50s ease`,
                },
              }}
            />
            <CardContent sx={{ minHeight: "260px" }}>
              <Typography gutterBottom variant="h5" align="center">
                Далеко-далеко за словесными горами.
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Далеко-далеко за, словесными горами в стране гласных и согласных
                живут рыбные тексты. Грустный назад всеми речью ipsum океана
                переулка текст, решила которое вершину, власти, запятых первую
                даль точках свой своих своего. Взобравшись!
              </Typography>
              <CardActions>
                <Button sx={{ color: "tomato" }} size="large">
                  Поделиться
                </Button>
                <Button sx={{ color: "tomato" }} size="large">
                  Узнать больше
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};

export default PostCard;
