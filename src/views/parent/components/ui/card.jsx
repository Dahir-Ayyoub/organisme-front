import React from "react";

const Card = (props) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${props.className}`}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = (props) => (
  <div
    className={`flex flex-col space-y-1.5 p-6 ${props.className}`}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = (props) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${props.className}`}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = (props) => (
  <p
    className={`text-sm text-muted-foreground ${props.className}`}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent = (props) => (
  <div className={`p-6 pt-0 ${props.className}`} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = (props) => (
  <div
    className={`flex items-center p-6 pt-0 ${props.className}`}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };