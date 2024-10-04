"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, Eye,ExternalLink } from "lucide-react"
import Link from "next/link"

interface Repo {
  id: number
  name: string
  language: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  description: string
  html_url: string
}

export default function GitHub() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const GITHUB_USERNAME = 'Chirag-S-Kotian'

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        setRepos(data)
        setIsLoading(false)
      } catch (err) {
        setError('Error fetching repositories. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchRepos()
  }, []);

  if (isLoading) {
    return <div className="text-center py-10">Loading repositories...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="w-full p-4 bg-background transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-primary">GitHub Repositories for {GITHUB_USERNAME}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
            <Card className="hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/10 bg-card dark:bg-gray-800 p-4 h-full flex flex-col justify-between group">
              <div>
                <CardHeader className="pb-2">
                  <CardTitle className="truncate text-xl font-semibold text-primary group-hover:text-primary/80 flex items-center">
                    {repo.name}
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{repo.description || "Killer this repo🔥🐦‍🔥"}</p>
                  {repo.language && (
                    <Badge variant="secondary" className="mb-2">
                      {repo.language}
                    </Badge>
                  )}
                </CardContent>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-4">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1 text-blue-500" />
                  {repo.forks_count}
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1 text-green-500" />
                  {repo.watchers_count}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}