/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Box_c58aa5dd1d3b24d730abac1c059d238a () {
  const reflex___state____state__reflex_chat___state____state = useContext(StateContexts.reflex___state____state__reflex_chat___state____state)



  return (
    <RadixThemesBox>
  {reflex___state____state__reflex_chat___state____state.chat_history.map((messages, index_a06503bbd3b1d474) => (
  <RadixThemesBox css={{"marginTop": "1em", "marginBottom": "1em"}} key={index_a06503bbd3b1d474}>
  <RadixThemesBox css={{"textAlign": "right"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginLeft": "20%", "backgroundColor": "var(--gray-4)"}}>
  {messages.at(0)}
</RadixThemesText>
</RadixThemesBox>
  <RadixThemesBox css={{"textAlign": "left"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "borderRadius": "5px", "marginTop": "0.5em", "marginBottom": "0.5em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px", "maxWidth": "30em", "display": "inline-block", "marginRight": "20%", "backgroundColor": "var(--accent-8)"}}>
  {messages.at(1)}
</RadixThemesText>
</RadixThemesBox>
</RadixThemesBox>
))}
</RadixThemesBox>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>
  <p>
  {`Ooops...Unknown Reflex error has occured:`}
</p>
  <p css={{"color": "red"}}>
  {error.message}
</p>
  <p>
  {`Please contact the support.`}
</p>
</div>
                    );
                }
            

export function Button_02d26ed4c208c0bfd426a479ff7b5533 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7697a07f2c2a7d3401278bb1cac2c939 = useCallback((...args) => addEvents([Event("reflex___state____state.reflex_chat___state____state.answer", {})], args, {}), [addEvents, Event])


  return (
    <RadixThemesButton css={{"backgroundColor": "var(--accent-10)", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} onClick={on_click_7697a07f2c2a7d3401278bb1cac2c939}>
  {`Ask`}
</RadixThemesButton>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Debounceinput_5d9fe01f38d7459e6e8364ae5fb0e065 () {
  const reflex___state____state__reflex_chat___state____state = useContext(StateContexts.reflex___state____state__reflex_chat___state____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_change_131abb4abcadb6dbe7ac4622352072ff = useCallback((_e0) => addEvents([Event("reflex___state____state.reflex_chat___state____state.set_question", {value:_e0.target.value})], [_e0], {}), [addEvents, Event])


  return (
    <DebounceInput css={{"borderWidth": "1px", "padding": "1em", "boxShadow": "rgba(0, 0, 0, 0.15) 0px 2px 8px"}} debounceTimeout={300} element={RadixThemesTextField.Root} onChange={on_change_131abb4abcadb6dbe7ac4622352072ff} placeholder={`Ask a question`} value={reflex___state____state__reflex_chat___state____state.question}/>
  )
}

export default function Component() {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
    const logFrontendError = (error, info) => {
        if (process.env.NODE_ENV === "production") {
            addEvents([Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", {
                stack: error.stack,
            })])
        }
    }
    

  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={logFrontendError}>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`center`} className={`rx-Stack`} direction={`column`} gap={`3`}>
  <Box_c58aa5dd1d3b24d730abac1c059d238a/>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <Debounceinput_5d9fe01f38d7459e6e8364ae5fb0e065/>
  <Button_02d26ed4c208c0bfd426a479ff7b5533/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Reflex Chat | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</ErrorBoundary>
  )
}
