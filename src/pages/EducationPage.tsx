import { Youtube, PlayCircle, BookOpen, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function EducationPage() {
  const { t } = useTranslation();
  const playlists = [
    {
      id: 'organic-farming',
      title: 'ORGANIC FARMING Videos (ಸಾವಯವ ಕೃಷಿ)',
      videoCount: 20,
      icon: BookOpen,
      color: 'from-green-600 to-emerald-700',
      url: 'https://www.youtube.com/watch?v=w212ATtyva4&list=PLYgzBw4kk-eH6GqXfXE8_OYqy0vsD6pgY',
    },
    {
      id: 'smart-farming',
      title: 'SMART FARMING TIPS Videos (ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪದ್ಧತಿ)',
      videoCount: 15,
      icon: Lightbulb,
      color: 'from-blue-600 to-cyan-700',
      url: 'https://www.youtube.com/watch?v=cSr_rlGT1IA&list=PLYgzBw4kk-eG2d2K3Zo2FXvWEKenaxPdn',
    },
    {
      id: 'profit-model',
      title: 'One Acre Profit Model Videos (1 ಎಕರೆ… ಲಾಭದ ಸೂತ್ರ)',
      videoCount: 18,
      icon: Youtube,
      color: 'from-amber-600 to-orange-700',
      url: 'https://www.youtube.com/watch?v=7_DWeKVtlBo&list=PLYgzBw4kk-eEp-bRe91C5_taZELvSCHIh',
    },
    {
      id: 'crop-care',
      title: 'Crop Care and Tips Videos (ಬೆಳೆ ಪಾಲನೆ ಹಾಗೂ ಮಾರ್ಗದರ್ಶನ)',
      videoCount: 25,
      icon: PlayCircle,
      color: 'from-lime-600 to-green-700',
      url: 'https://www.youtube.com/watch?v=CrFNHRdZmOE&list=PLYgzBw4kk-eEPzdSm1TRZmg-IEMCGCC2Q',
    },
  ];

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          {t('education.title')}
        </h1>
        <p className="text-xl text-zinc-400 mb-12">
          {t('education.subtitle')}
        </p>

        <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-red-900/30 p-3 rounded-lg">
              <Youtube className="text-red-500" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{t('education.channelTitle')}</h2>
              <p className="text-zinc-400">Farming With AI Raitha</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed mb-6">
            {t('education.channelDesc')}
          </p>
          <a
            href="https://www.youtube.com/@FarmingWithAIRaitha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            <Youtube size={20} />
            <span>{t('education.visitChannel')}</span>
          </a>
        </div>


        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-8">{t('education.featuredVideos')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/watch?v=0UGucDqQHn0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/0UGucDqQHn0/maxresdefault.jpg"
                  alt="Dandin's Farm Video 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-zinc-400 text-sm group-hover:text-green-400 transition-colors">{t('education.watchYoutube')}</p>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=yKImxKYNX2g"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/yKImxKYNX2g/maxresdefault.jpg"
                  alt="Dandin's Farm Video 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-zinc-400 text-sm group-hover:text-green-400 transition-colors">{t('education.watchYoutube')}</p>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=BCfQ3zhGvWY&t=1s"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://img.youtube.com/vi/BCfQ3zhGvWY/maxresdefault.jpg"
                  alt="Dandin's Farm Video 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-zinc-400 text-sm group-hover:text-green-400 transition-colors">{t('education.watchYoutube')}</p>
              </div>
            </a>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-8">{t('education.featuredPlaylists')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-600 transition-all"
            >
              <div className={`bg-gradient-to-br ${playlist.color} p-8 group-hover:p-10 transition-all`}>
                <playlist.icon size={48} className="text-white mb-4" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {playlist.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  {t(`education.playlists.${playlist.id}`)}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">{t('education.videosCount', { count: playlist.videoCount })}</span>
                  <span className="text-green-400 group-hover:translate-x-1 transition-transform">
                    {t('education.watchNow')}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('education.features.beginner.title')}</h3>
            <p className="text-zinc-400 text-sm">
              {t('education.features.beginner.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('education.features.practical.title')}</h3>
            <p className="text-zinc-400 text-sm">
              {t('education.features.practical.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-white mb-2">{t('education.features.profit.title')}</h3>
            <p className="text-zinc-400 text-sm">
              {t('education.features.profit.desc')}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
          <h3 className="text-2xl font-bold text-white mb-4">{t('education.joinCommunity')}</h3>
          <p className="text-zinc-300 leading-relaxed mb-6">
            {t('education.joinDesc')}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@FarmingWithAIRaitha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Youtube size={20} />
              <span>{t('education.subscribeNow')}</span>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}
