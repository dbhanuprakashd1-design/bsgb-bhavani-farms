const videos = [
  {
    id: 1,
    title: "Sheep Farming Complete Guide",
    description: "Learn modern sheep farming from experts.",
    youtubeId: "VIDEO_ID_1",
  },
  {
    id: 2,
    title: "Goat Farming Business",
    description: "How to start a profitable goat farm.",
    youtubeId: "VIDEO_ID_2",
  },
  {
    id: 3,
    title: "BSGB Bhavani Farms Tour",
    description: "Watch our farm and healthy livestock.",
    youtubeId: "VIDEO_ID_3",
  },
  
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Videos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-800">
            Watch Our Farming Videos
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn about sheep farming, goat farming, livestock care, and modern
            farming techniques through our videos.
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {video.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {video.description}
                </p>

                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-orange-500 font-semibold hover:text-green-700"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;