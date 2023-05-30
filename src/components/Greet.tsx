
import { invoke } from '@tauri-apps/api/tauri';
import { createSignal } from "solid-js";

export default function Greet() {

    let greeter = "";
    const [getValue, setValue] = createSignal(greeter);
    async function greet(name: string) : Promise<string> {
        greeter = await invoke('greet', { name: name });
        setValue(greeter)
        return greeter
    }

  return (
    <div>
      <button class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]" onClick={() => greet('Solid')}>Greet</button>
      <p>{getValue()}</p>
    </div>
  )
}