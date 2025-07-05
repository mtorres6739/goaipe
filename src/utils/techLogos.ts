// Technology logo URLs and metadata
export interface TechLogoData {
  name: string;
  logoUrl?: string;
  svgPath?: string;
  bgColor?: string;
  iconColor?: string;
  needsLightBg?: boolean;
}

export const techLogoData: Record<string, TechLogoData> = {
  'OpenAI': {
    name: 'OpenAI',
    logoUrl: 'https://www.svgrepo.com/show/306500/openai.svg',
    bgColor: '#000000',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'Anthropic': {
    name: 'Anthropic',
    logoUrl: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/anthropic-icon-wii9u8ifrjrd99btrqfgi.png/anthropic-icon-tdvkiqisswbrmtkiygb0ia.png?_a=DATAdtAAZAA0',
    bgColor: '#D4A373',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'DeepSeek': {
    name: 'DeepSeek',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.51.0/files/dark/deepseek-color.png',
    bgColor: '#1E3A8A',
    iconColor: '#FFFFFF'
  },
  'Groq': {
    name: 'Groq',
    logoUrl: 'https://img.icons8.com/?size=512&id=USGXKHXKl9X7&format=png',
    bgColor: '#F97316',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'Llama': {
    name: 'Llama',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/ollama.png',
    bgColor: '#000000',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'LangChain': {
    name: 'LangChain',
    logoUrl: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/langchain-ipuhh4qo1jz5ssl4x0g2a.png/langchain-dp1uxj2zn3752pntqnpfu2.png?_a=DATAdtAAZAA0',
    bgColor: '#1C1C1C',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'Crew AI': {
    name: 'Crew AI',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.51.0/files/dark/crewai-color.png',
    bgColor: '#10B981',
    iconColor: '#FFFFFF'
  },
  'Pydantic AI': {
    name: 'Pydantic AI',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.51.0/files/light/pydanticai-color.png',
    bgColor: '#E11D48',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'LiveKit': {
    name: 'LiveKit',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.51.0/files/dark/livekit-color.png',
    bgColor: '#FF006E',
    iconColor: '#FFFFFF'
  },
  'ElevenLabs': {
    name: 'ElevenLabs',
    logoUrl: 'https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg',
    bgColor: '#000000',
    iconColor: '#FFFFFF',
    needsLightBg: true
  },
  'Deepgram': {
    name: 'Deepgram',
    logoUrl: 'https://svgicons.com/api/ogimage/?id=188206&n=deepgram',
    bgColor: '#13EF93',
    iconColor: '#000000',
    needsLightBg: true
  },
  'Supabase': {
    name: 'Supabase',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    bgColor: '#3ECF8E',
    iconColor: '#FFFFFF'
  },
  'Neon': {
    name: 'Neon',
    logoUrl: 'https://neon.tech/favicon/favicon.png',
    bgColor: '#00E599',
    iconColor: '#000000'
  },
  'n8n': {
    name: 'n8n',
    logoUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.51.0/files/dark/n8n-color.png',
    bgColor: '#EA4B71',
    iconColor: '#FFFFFF',
    needsLightBg: true
  }
};