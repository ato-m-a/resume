import Emoji from '@/components/layout/emoji';
import { useCallback, type ReactElement } from 'react';

const RemoteControl = (): ReactElement => {
  const goTo = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      window.scrollTo({
        top: elementRect.top + scrollTop - 200,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="remote-wrapper">
      <p className="remote-button mb-3" onClick={() => goTo('about')}><Emoji.hello /></p>
      <p className="remote-button mb-3" onClick={() => goTo('skills')}><Emoji.skill /></p>
      <p className="remote-button mb-3" onClick={() => goTo('experience')}><Emoji.experience /></p>
      <p className="remote-button" onClick={() => goTo('project')}><Emoji.project /></p>
    </div>
  )
}

export default RemoteControl;