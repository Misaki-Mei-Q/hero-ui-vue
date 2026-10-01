<template>
  <div class="grid max-w-xl gap-4">
    <Card>
      <CardHeader>
        <CardTitle>Compatible CSS contract</CardTitle>
        <CardDescription>Vue output follows HeroUI React slot names and state attributes.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text variant="muted">This keeps effects, hover states, and selected animations aligned with the upstream CSS.</Text>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="primary">Review DOM</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Text } from '@misaki-mei-q/heroui-vue'
</script>
