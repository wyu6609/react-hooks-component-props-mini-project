import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  //round to the nearest 5

  const roundToNearest5 = (x) => Math.ceil(x / 5) * 5;
  let round = roundToNearest5(minutes);
  let time;
  if (round < 30) {
    switch (round) {
      case 5:
        time = "☕️";
        break;
      case 10:
        time = "☕️☕️";
        break;
      case 15:
        time = "☕️☕️☕️";
        break;
    }
  } else if (round >= 30) {
    switch (round) {
      case 30:
        time = "🍱🍱🍱";
        break;
      case 40:
        time = "🍱🍱🍱🍱";
        break;
      case 50:
        time = "🍱🍱🍱🍱🍱🍱";
        break;
      case 60:
        time = "🍱🍱🍱🍱🍱🍱";
        break;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}•{time}
        {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
