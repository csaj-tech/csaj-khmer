export default function PostImage({ className, media }) {
  const { src, alt, href } = media;

  const img = (
    <img
      className={className + " m-0"}
      src={src}
      alt={alt}
      style={{ width: "75%", height: "auto" }}
    />
  );

  return (
    /* add div to have images centered */
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        {/* add link to image if link exists */}
        {href ? (
          <a href={href} target="_blank" rel="noreferrer">
            {img}
          </a>
        ) : (
          img
        )}
        <p className="mt-0">{alt}</p>
      </div>
    </div>
  );
}
