interface RichTextNode {
  type: string
  text?: string
  children?: RichTextNode[]
}

export function extractPlainTextFromRichText(node: RichTextNode): string {
  if (node.type === 'text' && node.text) {
    return node.text
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractPlainTextFromRichText).join(' ')
  }

  return ''
}
