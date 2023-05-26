import { useEffect, useState } from "react";

import JohnDoe from "../assets/images/john-doe.jpeg";
import JaneDoe from "../assets/images/jane-doe.jpeg";
import PixelDoe from "../assets/images/pixel-doe.jpeg";

const fetchUsers = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "John Doe",
          birthdate: "1988-01-01",
          role: "Full Stack Developer",
          profilePictureUrl: JohnDoe,
          email: "user1@mail.com",
          phoneNumber: "555555555",
        },
        {
          id: "2",
          name: "Jane Doe",
          birthdate: "1994-01-01",
          role: "Front-end Developer",
          profilePictureUrl: JaneDoe,
          email: "user2@mail.com",
          phoneNumber: "555555555",
        },
        {
          id: "3",
          name: "Pixel Doe",
          birthdate: "1960-01-01",
          role: "Back-end Developer",
          profilePictureUrl: PixelDoe,
          email: "user3@mail.com",
          phoneNumber: "555555555",
        },
      ]);
    }, 1000)
  );

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
};
