const OpenInGoogleMaps = ({ address }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm underline"
    >
      {address} (Check On Google Map)
    </a>
  );
};

export default OpenInGoogleMaps;
