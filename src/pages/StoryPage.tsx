import { Sprout, Heart, Target, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function StoryPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
          {t('story.title')}
        </h1>
        <p className="text-xl text-zinc-400 mb-12">{t('story.subtitle')}</p>

        <div className="space-y-12">
          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Sprout className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t('story.section1.title')}</h2>
                <p className="text-zinc-400">{t('story.section1.sub')}</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {t('story.section1.p1')}
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Heart className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t('story.section2.title')}</h2>
                <p className="text-zinc-400">{t('story.section2.sub')}</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              {t('story.section2.p1')}
            </p>
            <p className="text-zinc-300 leading-relaxed">
              {t('story.section2.p2')}
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <Target className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t('story.section3.title')}</h2>
                <p className="text-zinc-400">{t('story.section3.sub')}</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {t('story.section3.p1')}
            </p>
          </section>

          <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <TrendingUp className="text-green-400" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{t('story.section4.title')}</h2>
                <p className="text-zinc-400">{t('story.section4.sub')}</p>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              {t('story.section4.p1')}
            </p>
            <p className="text-zinc-300 leading-relaxed">
              {t('story.section4.p2')}
            </p>
          </section>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-2xl p-8 border border-green-800/50">
            <h3 className="text-2xl font-bold text-white mb-4">{t('story.section5.title')}</h3>
            <p className="text-zinc-300 leading-relaxed">
              {t('story.section5.p1')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
