import { Messages } from '@/components/messages';
import Player from '@/components/player';
import SharedMenu from '@/components/sharedMenu';
import SocialsMenu from '@/components/socialsMenu';
import { TextGenerate } from '@/components/textGenerate';
import { Keyboard } from '@/components/keyboard';
import { Testimonials } from '@/components/testimonials';
import { Hero } from '@/components/hero';
import { ClerkCard } from '@/components/card';
import { Dashboard } from '@/components/dashboard';
import { Profile } from '@/components/profile';
import { ScrollSection } from '@/components/scrollSection';
import { Faq } from '@/components/faq';
import { Box } from '@/components/3d-box'
import { Buttons } from '@/components/buttons'
import { ControlButtons } from '@/components/controlButtons';
	
export default function Home() {
  return (
    <div className="div-center min-h-fit w-full  bg-gray-100 sm:h-screen">
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
      {/* <Hero /> */}
      {/* <Testimonials /> */}
      {/* <ClerkCard /> */}
      {/* <Dashboard /> */}
      {/* <Profile /> */}
      {/* <Faq /> */}
      {/* <ScrollSection /> */}
      {/* <Box /> */}
      {/* <Buttons />  */}
      <ControlButtons /> 
    </div>
  );
}
