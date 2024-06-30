export default function PostImage({ className, media }) {
  const { src, alt, href } = media;

  const img = (
    <img
      className={className}
      src={src}
      alt={alt}
      style={{ width: "75%", height: "auto" }}
    />
  );

  return (
    /* add div to have images centered */
    <div className="flex justify-center">
      {/* add link to image if link exists */}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  );
}
