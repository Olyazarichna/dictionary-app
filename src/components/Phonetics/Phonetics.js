import ReactAudioPlayer from "react-audio-player";

export const Phonetics = ({ phonetic }) => {
  return (
    <>
      <p>{phonetic.text}</p>
      {phonetic.audio !== "" ? (
        <ReactAudioPlayer src={phonetic.audio} controls />
      ) : (
        <p>Only one audio</p>
      )}
    </>
  );
};
export default Phonetics;
