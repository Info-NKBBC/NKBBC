import React from 'react';
import { Card, Flex, Text, Box, Badge, Grid, Stack } from '@sanity/ui';

export default function GroupReportStats() {
  // This is a placeholder for the actual stats data
  // In a real implementation, you would fetch this data from your API
  const stats = {
    totalReports: 24,
    thisWeek: 5,
    lastWeek: 7,
    groups: [
      { name: '尤君小組', count: 12 },
      { name: '朝暉小組', value: 8 },
      { name: '榮杰小組', value: 10 },
      { name: '秀蘭小組', value: 6 },
      { name: '俊男小組', value: 15 },
      { name: '青少年團契', value: 20 },
      { name: '黃晨小組', value: 5 },
      { name: '勝騰小組', value: 7 },
      { name: '玉真小組', value: 9 },
    ],
    recentReports: [
      { group: '尤君小組', date: '2023-10-15', count: 8 },
      { group: '朝暉小組', date: '2023-10-14', count: 6 },
      { group: '榮杰小組', date: '2023-10-13', count: 7 },
    ],
  };

  return (
    <Box padding={4}>
      <Grid columns={[1, 1, 2, 3]} gap={3} marginBottom={4}>
        <Card padding={3} radius={2} shadow={1}>
          <Flex align="center" justify="space-between">
            <Box>
              <Text size={1} weight="semibold">
                總回報數
              </Text>
              <Text size={5} weight="bold">
                {stats.totalReports}
              </Text>
            </Box>
            <Badge tone="primary" padding={2} radius={2} fontSize={1}>
              全部
            </Badge>
          </Flex>
        </Card>

        <Card padding={3} radius={2} shadow={1}>
          <Flex align="center" justify="space-between">
            <Box>
              <Text size={1} weight="semibold">
                本週回報
              </Text>
              <Text size={5} weight="bold">
                {stats.thisWeek}
              </Text>
            </Box>
            <Badge tone="positive" padding={2} radius={2} fontSize={1}>
              本週
            </Badge>
          </Flex>
        </Card>

        <Card padding={3} radius={2} shadow={1}>
          <Flex align="center" justify="space-between">
            <Box>
              <Text size={1} weight="semibold">
                上週回報
              </Text>
              <Text size={5} weight="bold">
                {stats.lastWeek}
              </Text>
            </Box>
            <Badge tone="caution" padding={2} radius={2} fontSize={1}>
              上週
            </Badge>
          </Flex>
        </Card>
      </Grid>

      <Grid columns={[1, 1, 2]} gap={4}>
        <Card padding={3} radius={2} shadow={1}>
          <Box marginBottom={3}>
            <Text size={1} weight="semibold">
              各小組回報統計
            </Text>
          </Box>
          <Stack space={2}>
            {stats.groups.map((group) => (
              <Flex key={group.name} align="center" justify="space-between" paddingY={2}>
                <Text size={1} style={{ flex: 1 }}>
                  {group.name}
                </Text>
                <Badge tone="primary" paddingX={2} radius={2} fontSize={1}>
                  {group.count || group.value}
                </Badge>
              </Flex>
            ))}
          </Stack>
        </Card>

        <Card padding={3} radius={2} shadow={1}>
          <Box marginBottom={3}>
            <Text size={1} weight="semibold">
              最近回報
            </Text>
          </Box>
          <Stack space={2}>
            {stats.recentReports.map((report, index) => (
              <Flex key={index} align="center" justify="space-between" paddingY={2}>
                <Box>
                  <Text size={1} weight="medium">
                    {report.group}
                  </Text>
                  <Text size={1} muted>
                    {report.date}
                  </Text>
                </Box>
                <Badge tone="primary" paddingX={2} radius={2} fontSize={1}>
                  {report.count} 筆
                </Badge>
              </Flex>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Box>
  );
}
