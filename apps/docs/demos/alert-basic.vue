<template>
  <div class="grid w-full max-w-xl gap-4">
    <Alert>
      <AlertIndicator />
      <AlertContent>
        <AlertTitle>New features available</AlertTitle>
        <AlertDescription>
          Check out the latest updates including dark mode support and improved accessibility
          states.
        </AlertDescription>
      </AlertContent>
    </Alert>

    <Alert status="accent">
      <AlertIndicator />
      <AlertContent>
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>
          A new version is available. Refresh to get the latest components and bug fixes.
        </AlertDescription>
        <Button class="mt-2 sm:hidden" size="sm" variant="primary">Refresh</Button>
      </AlertContent>
      <Button class="hidden sm:block" size="sm" variant="primary">Refresh</Button>
    </Alert>

    <Alert status="success">
      <AlertIndicator />
      <AlertContent>
        <AlertTitle>Profile updated successfully</AlertTitle>
      </AlertContent>
      <CloseButton />
    </Alert>

    <Alert status="warning">
      <AlertIndicator />
      <AlertContent>
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>
          Services will be unavailable on Sunday from 2:00 AM to 6:00 AM UTC.
        </AlertDescription>
      </AlertContent>
    </Alert>

    <Alert status="danger">
      <AlertIndicator />
      <AlertContent>
        <AlertTitle>Unable to connect to server</AlertTitle>
        <AlertDescription>
          Try the following steps:
          <ul class="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>Check your internet connection</li>
            <li>Refresh the page</li>
            <li>Clear your browser cache</li>
          </ul>
        </AlertDescription>
        <Button class="mt-2 sm:hidden" size="sm" variant="danger">Retry</Button>
      </AlertContent>
      <Button class="hidden sm:block" size="sm" variant="danger">Retry</Button>
    </Alert>

    <Alert status="accent">
      <AlertIndicator>
        <Spinner size="sm" />
      </AlertIndicator>
      <AlertContent>
        <AlertTitle>Processing your request</AlertTitle>
        <AlertDescription>
          Please wait while we sync your data. This may take a few moments.
        </AlertDescription>
      </AlertContent>
    </Alert>
  </div>
</template>

<script setup>
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertTitle,
  Button,
  CloseButton,
  Spinner,
} from '@misaki-mei/heroui-vue'
</script>
