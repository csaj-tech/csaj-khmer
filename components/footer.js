export const YEAR = 2023;

export default function Footer() {
    return (
        <section className="text-gray-800 bg-gray-100 font-sans text-lg">
            <div className="flex flex-row items-center px-8 py-8 max-w-8xl justify-between space-x-36">
                <div className="flex-none">
                    <p className="font-sans">Copyright © {YEAR} Cambodian Students' Association in Japan (CSAJ)
                    </p>
                </div>

                <div className="flex-auto text-right">
                    <a class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="mailto:csaj.info@gmail.com">csaj.info@gmail.com</a>
                </div>

                <div className="flex-auto">
                    <span className="flex flex-row justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a href="https://www.facebook.com/csajpage" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://t.me/+edmi4r6uHZU0NmVl" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Telegram</span>
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"  clip-rule="evenodd" /> 
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </section>
    );
}