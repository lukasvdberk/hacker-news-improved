import { writable } from 'svelte/store';
import type {Story} from "../models/Story";

const defaultStory: Story = undefined
export const selectedStory = writable(defaultStory);
