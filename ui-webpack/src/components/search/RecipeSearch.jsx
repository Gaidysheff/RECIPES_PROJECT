import * as React from "react";

import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PostsCard from "../../components/posts/PostCard";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RecipeSearch = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [recipeSearch, setRecipeSearch] = useState([]);
  const [lookup, setLookup] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_API_URL}/api/recipes/`)
          .then((res) => {
            setRecipeSearch(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TextField
        sx={{ display: { xs: "none", md: "flex" } }}
        color="warning"
        label="Поиск здесь!"
        variant="filled"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Поиск здесь!"
            variant="filled"
            onChange={(e) => setLookup(e.target.value)}
          />
          {recipeSearch
            .filter((search) => search.title.toLowerCase().includes(lookup))
            .map((search) =>
              lookup.length > 0 ? (
                <Grid item xs>
                  <PostsCard
                    title={search.title}
                    excerpt={search.excerpt}
                    image={search.image}
                    recipeHref={`/details/${search.slug}`}
                    myDirection={"flex"}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
        </Box>
      </Modal>
    </>
  );
};

export default RecipeSearch;
