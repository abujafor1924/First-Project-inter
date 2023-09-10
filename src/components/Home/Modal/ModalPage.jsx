const ModalPage = () => {
  return (
    <div>
      <div>
        <img
          src="data:image/png;base64,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"
          alt=""
          className="w-20 h-20"
        />
      </div>
      <div className="mt-20">
        <h1 className="text-5xl font-bold">The min as aspect</h1>
        <p className="mt-5">
          Like all learning problems, difficulties in writing can be devastating
          to a childs education and self-esteem. As children progress through
          school, they are increasingly expected to express what they know about
          many different subjects through writing. If a child fails to develop
          certain basic skills, he will be unable to write with the speed and
          fluency required to excel as these demands increase. Indeed, for a
          child struggling with a writing problem, the writing process itself
          interferes with learning. Students faced with such difficult odds have
          trouble staying motivated.
        </p>
        <img
          src="https://media.istockphoto.com/id/1408304009/photo/group-of-anonymous-people-raising-hands-on-a-seminar.jpg?s=1024x1024&w=is&k=20&c=WsA1O8xvvIPh3WMh9GNxvGaYuy5PeQr-gwob2dU-zAI="
          alt=""
          className="mt-4 rounded"
        />
      </div>
    </div>
  );
};

export default ModalPage;
