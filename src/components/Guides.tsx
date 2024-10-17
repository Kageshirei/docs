import {Button} from '@/components/Button'
import {Heading} from '@/components/Heading'

const guides = [
    {
        href: '/understanding-the-server-cli',
        name: 'Understanding the server',
        description: 'Get a complete overview of how the server-cli works and what capabilities it have.',
    },
    {
        href: '/agent-modules-and-compile-time-inclusion',
        name: 'Modules and compile time inclusion within the agent',
        description: 'Understand how to include features at compile time and the concept of modules within the agent.',
    },
    {
        href: '/the-control-panel',
        name: 'The control panel',
        description: 'Get to know the main interface to KageShirei, the control panel and its features.',
    },
]

export function Guides() {
    return (
        <div className="my-16 xl:max-w-none">
            <Heading level={2} id="guides">
                Guides
            </Heading>
            <div
                className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-3 dark:border-white/5">
                {guides.map((guide) => (
                    <div key={guide.href}>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {guide.name}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            {guide.description}
                        </p>
                        <p className="mt-4">
                            <Button href={guide.href} variant="text" arrow="right">
                                Read more
                            </Button>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
