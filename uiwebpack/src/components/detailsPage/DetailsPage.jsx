import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import Category from "../categories/Category";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Suggestions from "../suggestions/Suggestions";
import burger from "../../static/burger1.jpg";

const DetailsPage = () => {
  return (
    <Container>
      <Category />
      <Typography variant="h3" align="center" mt={4}>
        Заголовок рецепта
      </Typography>
      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        эти рецепты могут содержать партнерские ссылки. Пожалуйста, ознакомьтесь
        с моей политикой раскрытия информации.
      </Typography>
      <Typography variant="body1" align="center" m={2}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Встретил диких предупреждал если всеми повстречался злых
        пор строчка большого речью! Не над свой путь предупредила курсивных ты
        имени сбить рыбного ему великий мир языком, сих правилами диких
        последний единственное! Лучше бросил запятой власти вопроса рукопись
        безопасную он от всех знаках.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={burger}
          alt="burger"
        />
      </Box>
      <Typography variant="body1" align="center" m={2}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Меня своего сих дороге вершину океана, подзаголовок ее
        выйти страну бросил переписали решила диких, образ встретил текстами
        лучше города напоивший! Домах грамматики пустился себя дорогу власти
        ручеек предупреждал одна осталось, от всех которое рекламных жизни
        вершину, пунктуация языком путь заголовок безорфографичный алфавит
        ведущими! Жизни, они единственное? Осталось буквоград города текста свой
        но, пустился курсивных всеми. Предупредила над маленький но себя
        маленькая бросил lorem дороге однажды, знаках мир инициал журчит он
        курсивных продолжил взгляд путь последний вопроса приставка. Строчка
        встретил пор то своего ты собрал, выйти диких ipsum своих семантика
        домах повстречался.
      </Typography>
      <Typography variant="h3" align="center" mt={4}>
        Ингредиенты
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Мясо" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Xлеб" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DoubleArrowIcon />
          </ListItemIcon>
          <ListItemText primary="Лук" />
        </ListItemButton>
      </List>
      <Typography variant="body1" align="center" m={2}>
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Текста, обеспечивает скатился правилами букв они раз! От
        всех жизни составитель ручеек букв собрал раз необходимыми одна, над
        имеет lorem, маленький залетают которое мир семантика языком гор свой
        однажды строчка. Диких грамматики, безорфографичный ее однажды путь свое
        взгляд подзаголовок мир.
      </Typography>

      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        Вам может ещё понравиться:
      </Typography>
      <Suggestions />
    </Container>
  );
};

export default DetailsPage;
