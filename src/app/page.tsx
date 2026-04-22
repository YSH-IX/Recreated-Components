import { Messages } from '@/components/messages';
import Player from '@/components/player';
import SharedMenu from '@/components/sharedMenu';
import SocialsMenu from '@/components/socialsMenu';
import { TextGenerate } from '@/components/textGenerate';
import { Keyboard } from '@/components/keyboard';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="div-center bg-background-100 h-full w-full overflow-hidden p-4 sm:h-screen">
      {/* <SocialsMenu /> */}
      {/* <Player /> */}
      {/* <SharedMenu /> */}
      {/* <Messages />   */}
      {/* <TextGenerate
        text={
          'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past, I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.'
        }
      /> */}
      {/* <Keyboard /> */}
      <Testimonials />
    </div>
  );
}
