// function for generating name of a author

export function getName(author) {
  return author?.firstName + " " + author?.lastName;
}

// function for generating author profile url

export function getNameURL(author) {
  return (
    "/profile/" +
    (author?.firstName.toLowerCase() +
      "-" +
      author?.lastName.toLowerCase() +
      "-" +
      author?.id)
  );
}
