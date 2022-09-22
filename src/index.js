import queue from "./infra/queue.js";
import serveVideo from "./services/serveVideo.js";

const handlers = (job, err) => {
  console.log(err);
};

queue.process(serveVideo);
queue.on("failed", handlers);
