import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Box, Button, Container, Typography } from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { company } from "../../data/company";

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <Box component="nav" className="bg-white text-dark">
      <Container
        maxWidth="xl"
        className="flex justify-between items-center py-4 relative"
      >
        <Box className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <Box
            className={clsx(
              "absolute w-72 left-0 top-0 min-h-screen bg-white z-10 transition-all duration-300 ease-in-out",
              !toggleMenu && "-translate-x-full opacity-0"
            )}
          >
            <Button
              className="flex items-center justify-end gap-2 bg-primary text-white rounded-none"
              fullWidth
              onClick={() => setToggleMenu(false)}
            >
              <b>Fermer</b>
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">{company.name}</Typography>
        </Box>
        <Box>
          <Badge badgeContent={1} color="primary">
            <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
          </Badge>
        </Box>
      </Container>
    </Box>
  );
}
