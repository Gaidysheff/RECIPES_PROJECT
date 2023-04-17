import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import { Send as SendIcon } from "@mui/icons-material";
import chef from "../../static/chef.jpg";

const RightBar = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" align="center" mt={5}>
        Привет! Я Варвара, рекоммендую рецепт дня вкуснейшей яичницы для мужчин
      </Typography>
      <a href="/advice">
        <CardMedia
          component={"img"}
          height="300px"
          image={chef}
          alt="image of chef"
          sx={{
            width: "400px",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.8,
              boxSizing: "border-box",
              zIndex: 1,
              transition: `all 0.50s ease`,
            },
          }}
        />
      </a>
      <Typography align="left" variant="body1">
        Для того, чтобы приготовить наивкуснейшую яичницу, Вам необходимо .....
        <br />
        найти женщину, которая умеет готовить наивкуснейшую яичницу.
      </Typography>
      <Typography align="left" variant="body1">
        <br />
        Не забываем подписаться на "Круто и Точка :)"
        <br />
      </Typography>
      <Typography color="tomato">
        <a href="/advice">Узнать больше</a>
      </Typography>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          - Здесь может быть Ваша реклама -
        </Typography>
      </Card>
      <Typography align="center" color="white" bgcolor="tomato" mt={2}>
        Подписаться на email рассылку
      </Typography>
      <Box sx={{ pl: 10 }}>
        <TextField
          label="Your Email here!"
          variant="standard"
          color="warning"
        />
        <IconButton>
          <SendIcon sx={{ color: "tomato" }} />
        </IconButton>
      </Box>
      <Card sx={{ height: "200px", marginTop: 2 }}>
        <Typography align="center" variant="body1">
          - Здесь может быть Ваша реклама -
        </Typography>
      </Card>
    </Box>
  );
};

export default RightBar;
