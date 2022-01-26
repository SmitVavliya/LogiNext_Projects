import React from "react";

const Email = ({ email }) => {
  return (
    <div style={styles.email_con_style}>
      <i
        aria-label="icon: mail"
        className="anticon anticon-mail"
        style={styles.icon_style}
      >
        <svg
          viewBox="64 64 896 896"
          data-icon="mail"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
        </svg>
      </i>
      <p style={styles.email_tex_style}>{email}</p>
    </div>
  );
};

const styles = {
  email_con_style: {
    display: "flex",
    flexDirection: "row",
  },
  icon_style: {
    fontSize: 18,
  },
  email_tex_style: {
    marginLeft: 10,
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "1.8em",
    lineHeight: "1.8em",
  },
};

export default Email;
