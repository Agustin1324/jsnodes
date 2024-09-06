import NodeCreator from '@/components/NodeCreator';
import FlowContainer from '@/components/FlowContainer';

export default function Home() {
  return (
    <main className="flex h-screen">
      <NodeCreator />
      <FlowContainer />
    </main>
  );
}
