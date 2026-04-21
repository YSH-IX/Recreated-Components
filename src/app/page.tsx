import { Messages } from '@/components/messages';
import Player from '@/components/player';
import SharedMenu from '@/components/sharedMenu';
import SocialsMenu from '@/components/socialsMenu';
import { TextGenerate } from '@/components/textGenerate';

export default function Home() {
  return (
    <div className="bg-[#111111] div-center w-screen h-screen p-4">
      {/* <SocialsMenu /> */}
      {/* <Player /> */}
      {/* <SharedMenu /> */}
      <Messages />  
      {/* <TextGenerate /> */}
    </div>
  );
}
