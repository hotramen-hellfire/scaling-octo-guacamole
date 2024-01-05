import { extendTheme } from "@chakra-ui/react"
export const theme = extendTheme({
    colors: {
        brand: {
            100: "purple",
        },
    },
    fonts: {
        body: "Open Sans, sans-serif",
    },
    styles: {
        global: () => (
            {
                body: {
                    bg: "purple.200",
                    height: "100%",
                    overflow: "hidden",
                },
            }
        ),
    },
    components: {
    },
})