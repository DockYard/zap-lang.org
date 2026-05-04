/* Tweaks panel for the Zap landing page — only border weight is exposed. */

const ZAP_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "borderWeight": "medium"
}/*EDITMODE-END*/;

const BORDER_PX = {
  thin: '1.5px',
  medium: '2.5px',
  heavy: '4px',
};

function ZapTweaks() {
  const [t, setTweak] = useTweaks(ZAP_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const px = BORDER_PX[t.borderWeight] || BORDER_PX.medium;
    document.documentElement.style.setProperty('--border-weight', px);
  }, [t.borderWeight]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hand-drawn border weight">
        <TweakRadio
          label="Weight"
          value={t.borderWeight}
          onChange={(v) => setTweak('borderWeight', v)}
          options={['thin', 'medium', 'heavy']}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const zapTweaksRoot = document.createElement('div');
document.body.appendChild(zapTweaksRoot);
ReactDOM.createRoot(zapTweaksRoot).render(<ZapTweaks />);
